import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, Text, HelperText } from "react-native-paper";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";

import Alert from "../../components/Alert";
import { createJob } from "../../store/jobs/actions";
import { hasError, isLoading } from "../../store/jobs/selectors";
import CreateJobStyles from "../../styles/jobs/CreateJobStyles";

const CreateJobScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const error = useSelector(hasError);

  const handleSubmit = async () => {
    const response = await dispatch(
      createJob({ title, company, salary, description }),
    );

    if (response.type === "jobs/create/fulfilled") {
      Toast.show({
        type: "success",
        text1: "Success!",
        text2: "Job post created successfully!",
      });
      navigation.navigate("View Jobs");
    }
  };

  return (
    <View style={CreateJobStyles.container}>
      <Text variant="titleLarge" style={CreateJobStyles.title}>
        Create New Job Post
      </Text>
      <Text variant="bodyMedium" style={CreateJobStyles.subTitle}>
        Below are the fields to create a job post.
      </Text>
      {error.message && (
        <Alert
          message={error.message || "Something went wrong!"}
          type="error"
        />
      )}
      <View style={CreateJobStyles.input}>
        <TextInput
          label="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
          error={error.errors && error.errors.title}
        />
        <HelperText
          type={error.errors && error.errors.title ? "error" : "info"}
          visible
        >
          {error.errors && error.errors.title
            ? error.errors.title
            : "The title of the job, keep this short and sweet"}
        </HelperText>
      </View>
      <View style={CreateJobStyles.input}>
        <TextInput
          label="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
          error={error.errors && error.errors.description}
        />
        <HelperText
          type={error.errors && error.errors.description ? "error" : "info"}
          visible
        >
          {error.errors && error.errors.description
            ? error.errors.description
            : "A short description of the job"}
        </HelperText>
      </View>
      <View style={CreateJobStyles.input}>
        <TextInput
          label="Company"
          value={company}
          onChangeText={(text) => setCompany(text)}
          error={error.errors && error.errors.company}
        />
        <HelperText
          type={error.errors && error.errors.company ? "error" : "info"}
          visible
        >
          {error.errors && error.errors.company
            ? error.errors.company
            : "Who is the company that is hiring"}
        </HelperText>
      </View>
      <View style={CreateJobStyles.input}>
        <TextInput
          label="Salary"
          value={salary}
          keyboardType="numeric"
          onChangeText={(text) => setSalary(text)}
          error={error.errors && error.errors.salary}
        />
        <HelperText
          type={error.errors && error.errors.company ? "error" : "info"}
          visible
        >
          {error.errors && error.errors.company
            ? error.errors.company
            : "This will be the annual salary"}
        </HelperText>
      </View>
      <Button mode="contained" onPress={handleSubmit} loading={loading}>
        Submit
      </Button>
    </View>
  );
};

export default CreateJobScreen;
