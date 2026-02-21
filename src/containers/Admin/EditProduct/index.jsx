import { useState } from 'react';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import { ImageIcon } from '@phosphor-icons/react/dist/ssr';
import * as yup from 'yup';

import { api } from '../../../services/api';
import {
  Container,
  Form,
  InputGroup,
  Label,
  Input,
  LabelUpload,
  Select,
  SubmitButton,
  ErrorMessage,
} from './styles';
import { CheckBoxContainer } from './styles';

const schema = yup.object({
  name: yup.string().required('Digite o nome do produto'),
  price: yup
    .number()
    .positive()
    .required('Digite o preço do produto')
    .typeError('Digite o preço do produto'),
  category: yup.number().required('Selecione a categoria do produto'),
  offer: yup.boolean(),
});

export function EditProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const location = useLocation();
  const product = location.state?.product || {};
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }
    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const productFormData = new FormData();
    productFormData.append('name', data.name);
    productFormData.append('price', data.price * 100);
    productFormData.append('category_id', data.category);
    productFormData.append('offer', data.offer);
    if (data.file && data.file[0]) {
      productFormData.append('file', data.file[0]);
    }

    await toast.promise(api.put(`/products/${product.id}`, productFormData), {
      pending: 'Editando produto...',
      success: 'Produto Editado com sucesso! 👌',
      error: 'Erro ao Editar produto! 🤯',
    });

    setTimeout(() => {
      navigate('/admin/produtos');
    }, 2000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={product.name}
          />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input
            type="number"
            step="0.01"
            {...register('price')}
            defaultValue={product.price / 100}
          />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <ImageIcon />
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                setFileName(e.target.files[0]?.name);
                setValue('file', e.target.files);
                trigger('file');
              }}
            />
            {fileName || 'Imagem do Produto'}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            defaultValue={product.category_id || ''}
            render={({ field }) => (
              <Select
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Selecione a categoria"
                menuPortalTarget={document.body}
                value={categories.find((cat) => cat.id === field.value) || null}
                onChange={(option) => field.onChange(option ? option.id : null)}
                defaultValue={product.category_id || ''}
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <CheckBoxContainer>
            <input
              type="checkbox"
              defaultChecked={product.offer}
              {...register('offer')}
            />
            <Label>Produto em Oferta?</Label>
          </CheckBoxContainer>
        </InputGroup>

        <SubmitButton>Editar Produto</SubmitButton>
      </Form>
    </Container>
  );
}
