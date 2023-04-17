import Container from 'react-bootstrap/Container';
function Main({children}) {
    return (
        <main>
            <br/>
            <Container>
                {children}
            </Container>
        </main>
    );
}

export default Main;
