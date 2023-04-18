import Container from 'react-bootstrap/Container';
function Main({children}) {
    return (
        <main>
            <Container>
                {children}
            </Container>
        </main>
    );
}

export default Main;
