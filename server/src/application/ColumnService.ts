import ColumnRepository from "../domain/repository/ColumnRepository"

export default class ColumnService {
    readonly columnRepository: ColumnRepository;
    
    constructor(columnRepository: ColumnRepository){
        this.columnRepository = columnRepository;
    };

    async getColumns(idBoard: number){
        const columns = await this.columnRepository.findAllByIdBoard(idBoard);
        return columns;
    };
};
