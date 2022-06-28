import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @IsString({ message: "to be string" })
    readonly value: string;
    @IsNumber({}, { message: "to be number" })
    readonly userId: number;
}