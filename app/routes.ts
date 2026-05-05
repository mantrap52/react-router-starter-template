import {
  type RouteConfig,
  index,
} from "@react-router/dev/routes";

export default [
  // This tells the app: "At the main URL, show the home.tsx file"
  index("./routes/home.tsx"),
] satisfies RouteConfig;