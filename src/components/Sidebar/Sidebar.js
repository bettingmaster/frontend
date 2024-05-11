import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  List,
  ListItem,
  ListIcon,
  Input,
  InputGroup,
  InputLeftElement,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Link,
} from "@chakra-ui/react";
import { FaHome, FaLock, FaUser, FaShoppingCart } from "react-icons/fa";

const dataList = [
  { icon: FaHome, label: "Home", href: "/" },
  { icon: FaLock, label: "Settings", href: "/settings" },
  { icon: FaUser, label: "Profile", href: "/profile" },
  { icon: FaShoppingCart, label: "Cart", href: "/cart" },
];

const Sidebar = ({ isOpen, onClose, btnRef }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredList = dataList.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSidebarClose = () => {
    onClose();
    setSearchTerm("");
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={handleSidebarClose}
        finalFocusRef={btnRef}
        size={{ base: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl" }}
      >
        <DrawerOverlay>
          <DrawerContent backgroundColor="#1d212a" color="#fff">
            <DrawerCloseButton />
            <DrawerHeader
              mt={5}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Menu
            </DrawerHeader>
            <DrawerBody>
              <InputGroup mb={6}>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon fontSize={14} />
                </InputLeftElement>
                <Input
                  name="input"
                  fontSize={14}
                  width="75%"
                  height="28px"
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </InputGroup>
              <List spacing={3}>
                {filteredList.map((item, index) => (
                  <ListItem
                    key={index}
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    height="40px"
                    paddingLeft="25px"
                    _hover={{
                      backgroundColor: "gray.600",
                    }}
                  >
                    <ListIcon fontSize={14} as={item.icon} />
                    <Link
                      textDecoration="none"
                      fontSize={14}
                      fontWeight="550"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </ListItem>
                ))}
                {/* <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  height="40px"
                  paddingLeft="25px"
                  _hover={{
                    backgroundColor: "gray.600",
                  }}
                >
                  <ListIcon fontSize={14} as={FaLock} />
                  <Menu>
                    <MenuButton
                      as={Link}
                      textDecoration="none"
                      fontSize={14}
                      fontWeight="550"
                    >
                      Dropdown <FaChevronDown />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Action 1</MenuItem>
                      <MenuItem>Action 2</MenuItem>
                    </MenuList>
                  </Menu>
                </ListItem> */}
              </List>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Sidebar;

// import { useRef, useState } from "react";
// import styles from "./Sidebar.module.css";

// const menuItems = [
//   {
//     name: "Home",
//     icon: "home",
//   },
//   {
//     name: "Settings",
//     icon: "settings",
//     items: ["Display", "Editor", "Theme", "Interface"],
//   },
//   {
//     name: "Create",
//     icon: "add_box",
//     items: ["Article", "Document", "Report"],
//   },
//   {
//     name: "Account",
//     icon: "lock",
//     items: ["Dashboard", "Logout"],
//   },
//   {
//     name: "Products",
//     icon: "inventory_2",
//   },
//   {
//     name: "Favourites",
//     icon: "favorite",
//   },
// ];

// const Icon = ({ icon }) => (
//   <span className={styles.material_symbols_outlined}>{icon}</span>
// );

// const NavHeader = () => (
//   <header className={styles.sidebar_header}>
//     <button className={styles.btn} type="button">
//       <Icon icon="menu" />
//     </button>
//     <span>Admin</span>
//   </header>
// );

// const NavButton = ({ onClick, name, icon, isActive, hasSubNav }) => (
//   <button
//     type="button"
//     onClick={() => onClick(name)}
//     className={isActive ? "active" : ""}
//   >
//     {icon && <Icon icon={icon} />}
//     <span>{name}</span>
//     {hasSubNav && <Icon icon="expand_more" />}
//   </button>
// );

// const SubMenu = ({ item, activeItem, handleClick }) => {
//   const navRef = useRef(null);

//   const isSubNavOpen = (item, items) =>
//     items.some((i) => i === activeItem) || item === activeItem;

//   return (
//     <div
//       className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
//       style={{
//         height: !isSubNavOpen(item.name, item.items)
//           ? 0
//           : navRef.current?.clientHeight,
//       }}
//     >
//       <div ref={navRef} className="sub-nav-inner">
//         {item?.items.map((subItem) => (
//           <NavButton
//             key={item.id}
//             onClick={handleClick}
//             name={subItem}
//             isActive={activeItem === subItem}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Sidebar = () => {
//   const [activeItem, setActiveItem] = useState("");

//   const handleClick = (item) => {
//     console.log("activeItem", activeItem);
//     setActiveItem(item !== activeItem ? item : "");
//   };

//   return (
//     <aside className="sidebar">
//       <NavHeader />
//       {menuItems.map((item) => (
//         <div key={item.name}>
//           {!item.items && (
//             <NavButton
//               onClick={handleClick}
//               name={item.name}
//               icon={item.icon}
//               isActive={activeItem === item.name}
//               hasSubNav={!!item.items}
//             />
//           )}
//           {item.items && (
//             <>
//               <NavButton
//                 onClick={handleClick}
//                 name={item.name}
//                 icon={item.icon}
//                 isActive={activeItem === item.name}
//                 hasSubNav={!!item.items}
//               />
//               <SubMenu
//                 activeItem={activeItem}
//                 handleClick={handleClick}
//                 item={item}
//               />
//             </>
//           )}
//         </div>
//       ))}
//     </aside>
//   );
// };

// export default Sidebar;
