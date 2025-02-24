import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Planet from "../../../src/components/listPlanets/Planet";
import useFavorites from "../../../src/hooks/useFavorites";

jest.mock("../../../src/hooks/useFavorites", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    toggleFavorite: jest.fn(),
  })),
}));

describe("Planet Component", () => {
  const mockPlanet = {
    englishName: "Earth",
    id: "earth",
  };

  beforeEach(() => {
    (useFavorites as jest.Mock).mockClear();
  });

  it("renders planet name and favorite icon", () => {
    const { getByText, getByTestId } = render(
      <Planet planet={mockPlanet} isFavorite={false} />,
    );

    expect(getByText("Earth")).toBeTruthy();

    const icon = getByTestId("icon-heart-outline");
    expect(icon).toBeTruthy();
    expect(icon.props.size).toBe(24);
    expect(icon.props.color).toBe("#fff");
  });

  it("shows filled heart icon when planet is favorite", () => {
    const { getByTestId } = render(
      <Planet planet={mockPlanet} isFavorite={true} />,
    );

    const icon = getByTestId("icon-heart");
    expect(icon).toBeTruthy();
    expect(icon.props.color).toBe("#3c6fc8");
  });

  it("calls toggleFavorite when favorite button is pressed", () => {
    const mockToggleFavorite = jest.fn();
    (useFavorites as jest.Mock).mockReturnValue({
      toggleFavorite: mockToggleFavorite,
    });

    const { getByTestId } = render(
      <Planet planet={mockPlanet} isFavorite={false} />,
    );

    const button = getByTestId("icon-heart-outline");
    fireEvent.press(button);

    expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
    expect(mockToggleFavorite).toHaveBeenCalledWith(mockPlanet);
  });

  it("matches snapshot", () => {
    const tree = render(
      <Planet planet={mockPlanet} isFavorite={false} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
