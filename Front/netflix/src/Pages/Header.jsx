import React from 'react'
import Image from '../Images/Netflix Logo.png'
import Styles from './Header.module.css'
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export const Header = () => {
    return (
        <div className={Styles.MainContainer}>
            <div>
                <Flex justifyContent={"space-between"} padding={"0 10px"} alignItems={"center"}>

                    <img width={148} src={Image}></img>
                    <div className={Styles.ButtonsContainer}>
                        <Menu>
                            <MenuButton  className={Styles.DropdownButton} as={Button} rightIcon={<ChevronDownIcon />}>
                                Actions
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                        <Button className={Styles.SingInButton} >Sing In</Button>
                    </div>
                </Flex>
            </div>
        </div>
    )
}
