import { ArithmeticOperator } from '../models/arithmetic_operator.model'
import { ColumnName } from '../models/column_name.model'
import { ColumnValue } from '../models/column_value.model'
import {LogicalOperator} from '../models/logical_operator.model'

export class MockConditionService {
    public GetMockLogicalOperators() :LogicalOperator[] {
        return [
            {
                ID: 1,
                Name: "-",
            },
            {
                ID: 2,
                Name: "And",
            },
            {
                ID: 3,
                Name: "Or",
            },
        ]
    }
    
    public GetMockColumnNames() : ColumnName[] {
        return [
            {
                ID: 1,
                Name: "Business ID",
            },
            {
                ID: 2,
                Name: "Entity Number",
            },
            {
                ID: 3,
                Name: "Business_type",
            },
            {
                ID: 4,
                Name: "Inactive_date",
            },
            {
                ID: 5,
                Name: "Expiration_date",
            },
            {
                ID: 6,
                Name: "Agent_name",
            },
        ]
    }

    public GetMockArithmeticOperators() : ArithmeticOperator[] {
        return [
            {
                ID: 1,
                Name: "is_null",
            },
            {
                ID: 2,
                Name: "+",
            },
            {
                ID: 3,
                Name: "-",
            },
            {
                ID: 4,
                Name: "*",
            },
            {
                ID: 5,
                Name: "/",
            },
            {
                ID: 6,
                Name: "=",
            },
        ]
    }

    public GetMockColumnValues() : ColumnValue[] {
        return [
            {
                ID: 1,
                Name: "-",
            },
            {
                ID: 2,
                Name: "LLC",
            },
            {
                ID: 3,
                Name: "Michel King",
            },
        ]
    }
}

