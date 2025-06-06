import {Heading, Text, Box} from '@radix-ui/themes';

const Home = () => {
  return (
    <div>
      <Box
		style={{
			background: "var(--gray-a2)",
			border: "1px dashed var(--gray-a7)",
		}}
		p="4"
	>
      <Heading align="center" as="div" size="8" color="tomato">
        Bienvenido al Sistema de Gestión de Alumnos
      </Heading>
      <Text size="4" align="center" as="div" color="gray">
        Esta página te permite administrar la información de los alumnos de manera sencilla y eficiente.<br />
        Puedes navegar a las diferentes secciones utilizando el menú de navegación.<br />
        Tienes distintas opciones, como: agregar, editar, eliminar y consultar datos de los estudiantes.
      </Text>
      </Box>
    </div>
  )
}

export default Home