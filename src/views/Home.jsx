import { Heading, Text, Flex } from '@radix-ui/themes';

const Home = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="4"
      width="100%"
      height="100dvh"
      style={{
        background: "var(--gray-a2)",
        border: "1px dashed var(--gray-a7)",
      }}
    >
      <Heading as="div" size="9" color="tomato" align="center">
        Bienvenido al Sistema de Gestión de Alumnos
      </Heading>
      <Text size="4" align="center" as="div" color="gray">
        Esta página te permite administrar la información de los alumnos de manera sencilla y eficiente.<br />
        Puedes navegar a las diferentes secciones utilizando el menú de navegación.<br />
        Tienes distintas opciones, como: agregar, editar, eliminar y consultar datos de los estudiantes.
      </Text>
    </Flex>
  )
}

export default Home