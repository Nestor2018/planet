import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import PlanetList from "../../../src/components/listPlanets/PlanetList";
import useFavorites from "../../../src/hooks/useFavorites";

jest.mock("../../../src/hooks/useFavorites.ts", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../../../src/components/listPlanets/Planet", () => {
  const MockPlanet = ({ planet, isFavorite, ...props }) => (
    <view
      testID={`planet-${planet.id}`}
      planet={planet}
      isFavorite={isFavorite}
      {...props}
    />
  );
  MockPlanet.displayName = "Planet";
  return MockPlanet;
});

describe("PlanetList Component", () => {
  const mockPlanets = [
    { englishName: "Earth", id: "earth", rel: "earth-rel" },
    { englishName: "Mars", id: "mars", rel: "mars-rel" },
  ];

  const mockNavigate = jest.fn();

  it("renders a list of planets", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [{ id: "earth" }],
    });

    const { getByTestId } = render(<PlanetList planets={mockPlanets} />);

    const flatList = getByTestId("planet-list");
    expect(flatList).toBeTruthy();

    expect(getByTestId("planet-Earth")).toBeTruthy();
    expect(getByTestId("planet-Mars")).toBeTruthy();

    expect(getByTestId("planet-Earth").props.isFavorite).toBe(true);
    expect(getByTestId("planet-Mars").props.isFavorite).toBe(false);
  });

  it("renders empty message when no planets are provided", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [],
    });

    const { getByText, queryByTestId } = render(<PlanetList planets={[]} />);

    expect(queryByTestId("planet-Earth")).toBeNull();

    expect(getByText("No planets available.")).toBeTruthy();
  });

  it("updates favorite status based on useFavorites", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [{ id: "mars" }],
    });

    const { getByTestId } = render(<PlanetList planets={mockPlanets} />);

    expect(getByTestId("planet-Earth").props.isFavorite).toBe(false);
    expect(getByTestId("planet-Mars").props.isFavorite).toBe(true);
  });

  // 5. Snapshot
  it("matches snapshot with planets", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [{ id: "earth" }],
    });

    const tree = render(<PlanetList planets={mockPlanets} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
