import {
    DataSection,
    DataContainer,
    MainHeader,
    DataBorder,
    Subheader,
    DataP,
    DataLi
} from './DataStructuresStyling';

const Datastructures = () => {
    return (
        <>
            <DataSection>
                <DataContainer>
                    <MainHeader>datastuctures</MainHeader>
                    <DataBorder />
                    <Subheader>What are data structures</Subheader>
                    <DataP>Data structures allow you to efficiently manage data. Or, more precisely, a data structure is a collection of data values.</DataP>
                    <DataP>There are different types of data structures, and different types are suited for different applications, where some are highly specialized to specific tasks.
                        For example, relational databases commonly use B-tree indexes for data retrieval, while compiler implementations usually use hash tables to look up identifiers.
                    </DataP>
                    <DataP>The use of efficient data structures is the key to designing efficient algorithms.</DataP>

                    <DataP>There are numerous types of data structures, generally built upon simpler primitive data types</DataP>
                    <Subheader>Null or undefined</Subheader>
                    <DataLi>Undefined: Something that does not yet exist or doesn’t exist anymore. This will show you for example try to reach a variable the wrong way.</DataLi>
                    <DataLi>Null: When we wish to be able to represent something that exists being empty. That is the beginning of structural meaning.</DataLi>

                    <Subheader>Primitive values</Subheader>
                    <DataP>All types, except objects, define immutable values (can’t be changed). Those values are referred to as “primitive values”.</DataP>
                    <br />
                    <br />
                    <Subheader>To Be Continued...</Subheader>

                </DataContainer>
            </DataSection>
        </>
    )
}

export default Datastructures
