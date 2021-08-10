import {
    BigOSection,
    BigOContainer,
    MainHeader,
    BigOBorder,
    Subheader,
    BigOP,
    BigOLi,
    BigItalicP
} from './BigOStyling';

const BigO = () => {
    return (
        <>
            <BigOSection>
                <BigOContainer>
                    <MainHeader>Big O Notation</MainHeader>
                    <BigOBorder />
                    <BigOP>Describes the complexity of a code using algebraic terms. That is, it will tell us how fast a function grows or declines, and this helps us determine which algorithmic solution is ‘best’. Best, in this case, is how fast an algorithm will finish, it has nothing to do with readability.</BigOP>
                    <br />
                    <BigOP>We express complexity using big-O notation.
                        For a problem of size N (slowest growing first) :
                    </BigOP>

                    <BigOLi>O(1) &#10140; constant</BigOLi>
                    <BigOLi>O(n) &#10140; linear</BigOLi>
                    <BigOLi>O(n<sup>2</sup>) &#10140; quadratic</BigOLi>

                    <Subheader>If-Then-Else</Subheader>
                    <BigOP>if(condition) then</BigOP>
                    <BigItalicP>block 1</BigItalicP><BigOP>(sequence of statements)</BigOP>
                    <BigOP>else</BigOP>
                    <BigItalicP>block 2</BigItalicP><BigOP>(sequence of statements)</BigOP>
                    <BigOP>end if;</BigOP>
                    <br />
                    <BigOP>Here, either block 1 will execute, or block 2 will execute. Therefore, the worst-case time
                        is the slower of the two possibilities:
                    </BigOP>
                    <BigOP>If block 1 takes O(1) and block 2 takes O(n), the if-then-else statement would be O(n).</BigOP>
                    <br />
                    <br />
                    <Subheader>To Be Continued...</Subheader>
                </BigOContainer>
            </BigOSection>
        </>
    )
}

export default BigO
