import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HabitListPage from "../componentes/paginas/HabitListPage";

describe("HabitListPage (Karma + Jasmine)", () => {

  afterEach(() => cleanup());

  // Helper para render con router
  function renderWithRouter(ui) {
    return render(<MemoryRouter>{ui}</MemoryRouter>);
  }

  it("debería renderizar los hábitos iniciales correctamente", () => {
    renderWithRouter(<HabitListPage />);

    expect(screen.getByText("Beber 2L de agua")).toBeTruthy();
    expect(screen.getByText("Dormir 8 horas")).toBeTruthy();
    expect(screen.getByText("Caminar 10,000 pasos")).toBeTruthy();

    expect(screen.getByText(/Hábitos cumplidos hoy: 0/)).toBeTruthy();
  });

  it("debería aumentar el contador cuando se completa un hábito", () => {
    renderWithRouter(<HabitListPage />);

    const botonesCompletar = screen.getAllByRole("checkbox");
    fireEvent.click(botonesCompletar[0]);

    expect(screen.getByText(/Hábitos cumplidos hoy: 1/)).toBeTruthy();
    expect(screen.getByText(/1 de 3 hábitos cumplidos hoy/)).toBeTruthy();
  });

  it("debería eliminar un hábito al hacer clic en el botón 'Eliminar'", () => {
    renderWithRouter(<HabitListPage />);

    const habitName = "Dormir 8 horas";
    expect(screen.getByText(habitName)).toBeTruthy();

    const botonesEliminar = screen.getAllByText("Eliminar");
    fireEvent.click(botonesEliminar[1]);

    expect(screen.queryByText(habitName)).toBeNull();
    expect(screen.getByText(/0 de 2 hábitos cumplidos hoy/)).toBeTruthy();
  });

});