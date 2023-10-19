import React from "react";
import { View } from "react-native";
import { TextInput, Button, Text, HelperText } from "react-native-paper";

import Alert from "../../components/Alert";
import CreateJobStyles from "../../styles/jobs/CreateJobStyles";

const CreateUpdateJobForm = ({
  form,
  onUpdateInput,
  handleSubmit,
  loading,
  error,
  creating,
}) => {
  return (
    <View style={CreateJobStyles.container}>
      <Text variant="titleLarge" style={CreateJobStyles.title}>
        {creating ? "Create New Job Post" : "Update Job Post"}
      </Text>
      <Text variant="bodyMedium" style={CreateJobStyles.subTitle}>
        {creating
          ? "Below are the fields to create a job post."
          : "Below are the fields to update a job post."}
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
          value={form.title}
          onChangeText={(text) => onUpdateInput("title", text)}
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
          value={form.description}
          onChangeText={(text) => onUpdateInput("description", text)}
          error={error.errors && error.errors.description}
          multiline
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
          value={form.company}
          onChangeText={(text) => onUpdateInput("company", text)}
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
          value={form.salary.toString()}
          keyboardType="numeric"
          onChangeText={(text) => onUpdateInput("salary", text)}
          error={error.errors && error.errors.salary}
        />
        <HelperText
          type={error.errors && error.errors.salary ? "error" : "info"}
          visible
        >
          {error.errors && error.errors.salary
            ? error.errors.salary
            : "This will be the annual salary"}
        </HelperText>
      </View>
      <Button mode="contained" onPress={handleSubmit} loading={loading}>
        Submit
      </Button>
    </View>
  );
};

export default CreateUpdateJobForm;
