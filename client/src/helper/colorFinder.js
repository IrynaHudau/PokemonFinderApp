export default function getColor(type){
    switch (type) {
      case "fire":   return "red";
      case "grass": return "green";
      case "poison":  return "purple";
      case "water":  return "blue";
      case "flying":  return "darkblue";
      case "bug":  return "lightgreen";
      case "electric":  return "yellow";
      case "dragon":  return "darkdarkblue";
      case "ground":  return "brown";
      case "dark":  return "black";
      case "ice":  return "lightlightblue";
      case "normal":  return "grey";
      case "rock":  return "lightbrown";
      case "steel":  return "lightlightgreen";
      case "fairy":  return "pink";
      case "psychic":  return "fuchsia";
      case "fighting":  return "orange";
      case "ghost":  return "lightpurple";
      case "shadow":  return "black";
      default:      return "#FFFFFF";
    }
  };