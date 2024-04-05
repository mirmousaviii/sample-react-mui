import Link from 'next/link'
import {
    Box,
    AppBar,
    Toolbar,
    Button,
    Typography,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';

const pages = [
    {
        link: "/",
        icon: <HomeIcon/>,
        title: "Home",
    },
    {
        link: "/devices",
        icon: <DevicesIcon/>,
        title: "Devices",
    },
];

export default function Header() {
    return (
        <>
            <AppBar component="nav" position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Sample Company
                    </Typography>
                    <Box>
                        {pages.map((page) => (
                            <Button key={page.link} color="inherit" component={Link} href={page.link}>
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}