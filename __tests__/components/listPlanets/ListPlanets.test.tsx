import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import ListPlanets from "../../../src/components/listPlanets/ListPlanets";
import usePlanets from "../../../src/hooks/usePlanets";

jest.mock("../../../src/hooks/usePlanets", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("ListPlanets Component", () => {
  const mockPlanets = [
    { englishName: "Earth", id: "earth" },
    { englishName: "Mars", id: "mars" },
    { englishName: "Jupiter", id: "jupiter" },
  ];

  beforeEach(() => {
    (usePlanets as jest.Mock).mockClear();
  });

  it("renders Loader when loading is true", () => {
    (usePlanets as jest.Mock).mockReturnValue({
      planets: [],
      loading: true,
      error: null,
    });

    const { getByTestId } = render(<ListPlanets />);
    expect(getByTestId("loader")).toBeTruthy();
  });

  it("renders error message when error exists", () => {
    (usePlanets as jest.Mock).mockReturnValue({
      planets: [],
      loading: false,
      error: "Failed to fetch planets",
    });

    const { getByText } = render(<ListPlanets />);
    expect(getByText("Failed to fetch planets")).toBeTruthy();
  });

  it("matches snapshot when loaded", () => {
    (usePlanets as jest.Mock).mockReturnValue({
      planets: mockPlanets,
      loading: false,
      error: null,
    });

    const tree = render(<ListPlanets />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
