import { TabNav, Text } from '@radix-ui/themes';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = memo(() => {
    return (
        <div className="navBar" >
            <TabNav.Root size="2" color="cyan">
                <TabNav.Link asChild active >
                    <NavLink to="/" >
                        <Text  size="5" weight="bold" color="cyan">Inicio</Text>
                    </NavLink>
                </TabNav.Link>
                <TabNav.Link asChild active>
                    <NavLink to="/students">
                        <Text  size="5" weight="bold" color="cyan">Alumnos</Text>
                    </NavLink>
                </TabNav.Link>
                <TabNav.Link asChild active>
                    <NavLink to="/students/add" >
                        <Text size="5" weight="bold" color="cyan">Añadir Alumno</Text>
                    </NavLink>
                </TabNav.Link>
                <TabNav.Link asChild active>
                    <NavLink to="/about">
                        <Text size="5" weight="bold" color="cyan">Acerca De</Text>
                    </NavLink>
                </TabNav.Link>
            </TabNav.Root>
        </div>
    );
});

export default NavBar;
