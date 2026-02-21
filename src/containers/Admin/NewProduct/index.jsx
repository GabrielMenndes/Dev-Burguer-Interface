import { useState } from 'react';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
  CheckBoxContainer,
} from './styles';

const schema = yup.object({
  name: yup.string().required('Digite o nome do produto'),
  price: yup
    .number()
    .positive()
    .required('Digite o preço do produto')
    .typeError('Digite o preço do produto'),
  category: yup.number().required('Selecione a categoria do produto'),
  offer: yup.boolean(),
  file: yup
    .mixed()
    .test('required', 'Selecione a imagem do produto', (value) => {
      // value pode ser FileList ou array
      return (
        value && (value.length > 0 || (value instanceof FileList && value[0]))
      );
    })
    .test('fileSize', 'A imagem deve ser menor que 5MB', (value) => {
      const file =
        value && (value[0] || (value instanceof FileList && value[0]));
      return !file || file.size <= 5 * 1024 * 1024;
    })
    .test('type', 'A imagem deve ser do tipo PNG ou JPEG', (value) => {
      const file =
        value && (value[0] || (value instanceof FileList && value[0]));
      return !file || file.type === 'image/png' || file.type === 'image/jpeg';
    }),
});

export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
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
    await toast.promise(api.post('/products', productFormData), {
      pending: 'Adicionando produto...',
      success: 'Produto adicionado com sucesso! 👌',
      error: 'Erro ao adicionar produto! 🤯',
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
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
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
            render={({ field }) => (
              <Select
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="Selecione a categoria"
                menuPortalTarget={document.body}
                value={categories.find((cat) => cat.id === field.value) || null}
                onChange={(option) => field.onChange(option ? option.id : null)}
              />
            )}
          />
          <ErrorMessage>{errors?.category?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <CheckBoxContainer>
            <input type="checkbox" {...register('offer')} />
            <Label>Produto em Oferta?</Label>
          </CheckBoxContainer>
        </InputGroup>

        <SubmitButton>Adicionar Produto</SubmitButton>
      </Form>
    </Container>
  );
}
