import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'submit' | 'button';
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacture: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    year: number;
    fuel: string;
    limit: number;
    model: string;
    manufacturer: string;
}

export interface OptionProps{
    title: string;
    value: string;
}

export interface CustomFilterProps{
    title: string;
    options: OptionProps[]
}

export interface ShowMoreProps{
    pageNumber: number; 
    isNext: boolean;
}

export interface SearchParams {
    year?: number;
    fuel?: string;
    limit?: number;
    model?: string;
    manufacturer?: string;
  };