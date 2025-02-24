import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SortButtons from "../../../src/components/listPlanets/SortButtons";

jest.mock("@expo/vector-icons", () => ({
  Ionicons: ({ name, size, color, ...props }) => (
    <view
      testID={`icon-${name}`}
      name={name}
      size={size}
      color={color}
      {...props}
    />
  ),
}));

describe("SortButtons Component", () => {
  const mockSetSortOrder = jest.fn();

  beforeEach(() => {
    mockSetSortOrder.mockClear();
  });

  it("renders ascending and descending buttons", () => {
    const { getByTestId, getByText } = render(
      <SortButtons sortOrder="asc" setSortOrder={mockSetSortOrder} />,
    );

    expect(getByTestId("sort-buttons")).toBeTruthy();

    expect(getByText("Ascendente")).toBeTruthy();
    expect(getByText("Descendente")).toBeTruthy();

    const ascIcon = getByTestId("icon-arrow-up");
    const descIcon = getByTestId("icon-arrow-down");
    expect(ascIcon).toBeTruthy();
    expect(descIcon).toBeTruthy();
  });

  it("calls setSortOrder with 'asc' when ascending button is pressed", () => {
    const { getByText } = render(
      <SortButtons sortOrder="desc" setSortOrder={mockSetSortOrder} />,
    );

    const ascButton = getByText("Ascendente");
    fireEvent.press(ascButton);

    expect(mockSetSortOrder).toHaveBeenCalledTimes(1);
    expect(mockSetSortOrder).toHaveBeenCalledWith("asc");
  });

  it("calls setSortOrder with 'desc' when descending button is pressed", () => {
    const { getByText } = render(
      <SortButtons sortOrder="asc" setSortOrder={mockSetSortOrder} />,
    );

    const descButton = getByText("Descendente");
    fireEvent.press(descButton);

    expect(mockSetSortOrder).toHaveBeenCalledTimes(1);
    expect(mockSetSortOrder).toHaveBeenCalledWith("desc");
  });

  // 3. Estilos condicionales
  it("applies active styles to ascending button when sortOrder is 'asc'", () => {
    const { getByText, getByTestId } = render(
      <SortButtons sortOrder="asc" setSortOrder={mockSetSortOrder} />,
    );

    const ascButton = getByText("Ascendente").parent;
    const ascIcon = getByTestId("icon-arrow-up");
    const ascText = getByText("Ascendente");

    expect(ascButton.props.style).toStrictEqual([
      { color: "#fff", fontSize: 14, marginLeft: 5 },
      { color: "#20252c" },
    ]);
    expect(ascIcon.props.color).toBe("#20252c");
    expect(ascText.props.style).toStrictEqual([
      { color: "#fff", fontSize: 14, marginLeft: 5 },
      { color: "#20252c" },
    ]);
  });

  it("applies active styles to descending button when sortOrder is 'desc'", () => {
    const { getByText, getByTestId } = render(
      <SortButtons sortOrder="desc" setSortOrder={mockSetSortOrder} />,
    );

    const descButton = getByText("Descendente").parent;
    const descIcon = getByTestId("icon-arrow-down");
    const descText = getByText("Descendente");

    expect(descButton.props.style).toStrictEqual([
      { color: "#fff", fontSize: 14, marginLeft: 5 },
      { color: "#20252c" },
    ]);
    expect(descIcon.props.color).toBe("#20252c");
    expect(descText.props.style).toStrictEqual([
      { color: "#fff", fontSize: 14, marginLeft: 5 },
      { color: "#20252c" },
    ]);
  });

  it("applies inactive styles to ascending button when sortOrder is 'desc'", () => {
    const { getByText, getByTestId } = render(
      <SortButtons sortOrder="desc" setSortOrder={mockSetSortOrder} />,
    );

    const ascButton = getByText("Ascendente").parent;
    const ascIcon = getByTestId("icon-arrow-up");
    const ascText = getByText("Ascendente");

    expect(ascButton.props.style).toStrictEqual([
      { color: "#fff", fontSize: 14, marginLeft: 5 },
      false,
    ]);
    expect(ascIcon.props.color).toBe("#fff");
    expect(ascText.props.style).toStrictEqual([
      { color: "#fff", fontSize: 14, marginLeft: 5 },
      false,
    ]);
  });

  it("matches snapshot", () => {
    const tree = render(
      <SortButtons sortOrder="asc" setSortOrder={mockSetSortOrder} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
