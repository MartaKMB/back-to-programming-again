const dayOfTheWeek = "środa";

switch (dayOfTheWeek) {
  case "poniedziałek":
    console.log("dziś PON");
    break;
  case "wtorek":
    console.log("dziś WT");
    break;
  case "środa":
    console.log("dziś ŚR");
    break;
  case "czwartek":
    console.log("dziś CZW");
    break;
  case "piątek":
    console.log("dziś PT");
    break;
  case "sobota":
  case "niedziela":
    console.log("WEEKEND!");
    break;
  default:
    console.log("nie wiem, co to za dzień");
    break;
}

