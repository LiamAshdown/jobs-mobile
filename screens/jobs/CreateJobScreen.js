import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";

import CreateUpdateJobForm from "../../components/jobs/CreateUpdateJobForm";
import { createJob } from "../../store/jobs/actions";
import { hasError, isLoading } from "../../store/jobs/selectors";

const CreateJobScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    salary: "",
    description: "",
  });

  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const error = useSelector(hasError);

  const handleSubmit = async () => {
    const response = await dispatch(createJob(form));

    if (response.type === "jobs/create/fulfilled") {
      Toast.show({
        type: "success",
        text1: "Success!",
        text2: "Job post created successfully!",
        position: "bottom",
      });
      navigation.navigate("View Jobs");
    }
  };

  const onUpdateInput = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <CreateUpdateJobForm
      form={form}
      onUpdateInput={onUpdateInput}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
      creating
    />
  );
};

export default CreateJobScreen;
