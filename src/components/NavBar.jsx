import { TabNav, Text } from '@radix-ui/themes';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = memo(() => {
    return (
        <div className="navBar" >
            <TabNav.Root size="2" color="orange">
                <TabNav.Link asChild active >
                    <NavLink to="/" >
                        <Text  size="5" weight="bold" color="orange">Inicio</Text>
                    </NavLink>
                </TabNav.Link>
                <TabNav.Link asChild active>
                    <NavLink to="/students">
                        <Text  size="5" weight="bold" color="orange">Alumnos</Text>
                    </NavLink>
                </TabNav.Link>
                <TabNav.Link asChild active>
                    <NavLink to="/students/add" >
                        <Text size="5" weight="bold" color="orange">Añadir Alumno</Text>
                    </NavLink>
                </TabNav.Link>
                <TabNav.Link asChild active>
                    <NavLink to="/about">
                        <Text size="5" weight="bold" color="orange">Acerca De</Text>
                    </NavLink>
                </TabNav.Link>
            </TabNav.Root>
        </div>
    );
});

export default NavBar;
