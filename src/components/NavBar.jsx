
import ShopIcon from "@mui/icons-material/Shop";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar-container">
      <ShopIcon
        fontSize="large"
        color="success"
        onClick={() => navigate("/")}
        sx={{
          cursor: "pointer",
          transition: "all .6s",
          "&:hover": {
            scale: "1.1",
          },
        }}
      />
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon
          fontSize="large"
          color="default"
          onClick={() => navigate("/basket")}
          sx={{
            cursor: "pointer",
            transition: "all .6s",
            "&:hover": {
              color: "rgb(56, 55, 55)",
            },
          }}
        />
      </Badge>
    </div>
  );
};

export default Navbar;
