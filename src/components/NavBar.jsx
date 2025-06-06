import { Box, Flex, TabNav, Text } from '@radix-ui/themes';
import { memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = memo(() => {

    const location = useLocation();

    return (
        <TabNav.Root size="2" color="orange"
            style={{
                position: 'sticky',
                top: 0,
                left: 0,
                zIndex: 1000,
                background: '#18191B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '60px',
                gap: '16px',
            }}
        >
            <TabNav.Link active={location.pathname === '/'} asChild>
                <NavLink to="/" >
                    <Text size="5" weight="bold" color="orange">Inicio</Text>
                </NavLink>
            </TabNav.Link>
            <TabNav.Link active={location.pathname === '/students'} asChild>
                <NavLink to="/students">
                    <Text size="5" weight="bold" color="orange">Alumnos</Text>
                </NavLink>
            </TabNav.Link>
            <TabNav.Link active={location.pathname === '/students/add'} asChild>
                <NavLink to="/students/add" >
                    <Text size="5" weight="bold" color="orange">Añadir Alumno</Text>
                </NavLink>
            </TabNav.Link>
            <TabNav.Link active={location.pathname === '/about'} asChild>
                <NavLink to="/about">
                    <Text size="5" weight="bold" color="orange">Acerca De</Text>
                </NavLink>
            </TabNav.Link>
        </TabNav.Root>
    );
});

export default NavBar;
