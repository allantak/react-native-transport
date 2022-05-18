import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacityProps, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import { AppStyles } from "../../styles/colors";
import Button from "../button";
import Input from "../input";
import { styles, TabItems } from "./styles";

export default function ButtonFilter({ ...props }: TouchableOpacityProps) {
  return (
    <TabItems {...props}>
      <Ionicons name="filter" size={16} color={`${AppStyles.colour.primary}`} />
    </TabItems>
  );
}
