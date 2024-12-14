import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NewPostPage from "../pages/newPost";
import '@testing-library/jest-dom';
import { handlePosts } from "../pages/api/handlePost";
import React from 'react';

// Mocking the handlePosts function
jest.mock("../pages/api/handlePost", () => ({
  handlePosts: jest.fn(),
}));

describe("NewPostPage", () => {
  (handlePosts as jest.Mock).mockReturnValue({
    userId: "",
    setUserId: jest.fn(),
    title: "",
    setTitle: jest.fn(),
    tags: "",
    setTags: jest.fn(),
    content: "",
    setContent: jest.fn(),
    loading: false,
    error: "",
    handleSubmit: jest.fn(),
  });

  test("renders the form elements correctly", () => {
    render(<NewPostPage />);

    // Verifica se os campos estão sendo renderizados
    expect(screen.getByPlaceholderText("User ID")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tags")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Content")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("displays error message if there is an error", () => {
    // Altere o mock para simular um erro
    (handlePosts as jest.Mock).mockReturnValue({
      userId: "",
      setUserId: jest.fn(),
      title: "",
      setTitle: jest.fn(),
      tags: "",
      setTags: jest.fn(),
      content: "",
      setContent: jest.fn(),
      loading: false,
      error: "Something went wrong",
      handleSubmit: jest.fn(),
    });

    render(<NewPostPage />);

    // Verifica se a mensagem de erro é exibida
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  test("disables submit button while loading", () => {
    // Simule o estado de loading
    (handlePosts as jest.Mock).mockReturnValue({
      userId: "",
      setUserId: jest.fn(),
      title: "",
      setTitle: jest.fn(),
      tags: "",
      setTags: jest.fn(),
      content: "",
      setContent: jest.fn(),
      loading: true,
      error: "",
      handleSubmit: jest.fn(),
    });

    render(<NewPostPage />);

    // Verifica se o botão está desabilitado durante o loading
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByText("Enviando...")).toBeInTheDocument();
  });

  test("calls handleSubmit when form is submitted", async () => {
    const mockHandleSubmit = jest.fn();

    // Alterando o mock para usar a função handleSubmit real
    (handlePosts as jest.Mock).mockReturnValue({
      userId: "",
      setUserId: jest.fn(),
      title: "",
      setTitle: jest.fn(),
      tags: "",
      setTags: jest.fn(),
      content: "",
      setContent: jest.fn(),
      loading: false,
      error: "",
      handleSubmit: mockHandleSubmit,
    });

    render(<NewPostPage />);

    // Preenche o formulário
    fireEvent.change(screen.getByPlaceholderText("User ID"), {
      target: { value: "1" },
    });
    fireEvent.change(screen.getByPlaceholderText("Title"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(screen.getByPlaceholderText("Tags"), {
      target: { value: "Test, Tags" },
    });
    fireEvent.change(screen.getByPlaceholderText("Content"), {
      target: { value: "Test content" },
    });

    // Envia o formulário
    fireEvent.submit(screen.getByTestId('new-post-form'))

    // Espera que a função handleSubmit tenha sido chamada
    await waitFor(() => expect(mockHandleSubmit).toHaveBeenCalled());
  });
});
