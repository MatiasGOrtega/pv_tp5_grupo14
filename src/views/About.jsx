import { Avatar, Flex,Heading,Card,Text} from '@radix-ui/themes'
const team = [
{
    nombre: "Matias Gabriel Ortega",
    git: "@MatiasGOrtega"
},
{
    nombre: "Victor Fernando Balcazar",
    git: "@vfbalcazar08"
},
{
    nombre: "Rodrigo Alexis Guanactolay",
    git: "@GuanactolayRodrigo"
},
{
    nombre: "Lucas Enrique Cari",
    git: "@CariLucky"
},
{
    nombre: "Gabriel Maximiliano Tarcaya",
    git: "@MaximilianoT13"
}
]
const About = () => {
  return (
    <Flex align="center" justify="center" p="4">
      <Card size="5" style={{ maxWidth: "500px", width: '100%'}}>
        <Flex justify="center" mb="4" >
          <Heading as="h1" size="6" weight="bold">
            Nuestro Equipo
          </Heading>
        </Flex>

        <Flex direction="column" gap="4" >
          {team.map((t, index) => (
            <Card key={index}>
              <Flex gap="4" align="center">
                <Avatar 
                  size="7"
                  fallback={t.nombre.charAt(0)}
                />
                <Flex direction="column">
                  <Text weight="bold" size="4">
                    {t.nombre}</Text>
                  <Text size="2" weight="bold">
                    GitHub: <Text color="blue">{t.git}</Text>
                  </Text>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Card>
    </Flex>
  );
}

export default About