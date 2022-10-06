import { TouchableOpacityProps } from "react-native";
import { Content, Title, ButtonLarg, TextButton } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface IUpload extends TouchableOpacityProps {
  title: string;
}

export default function Upload({ ...props }: IUpload) {
  return (
    <Content>
      <Title>{props.title}</Title>
      <ButtonLarg {...props}>
        <MaterialIcons name="file-upload" size={16} color="white" />
        <TextButton>Upload</TextButton>
      </ButtonLarg>
    </Content>
  );
}
