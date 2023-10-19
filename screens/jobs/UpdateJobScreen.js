import React, { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";

import CreateUpdateJobForm from "../../components/jobs/CreateUpdateJobForm";
import { updateJob } from "../../store/jobs/actions";
import { hasError, isLoading } from "../../store/jobs/selectors";

const UpdateJobScreen = ({ route, navigation }) => {
  const [form, setForm] = useState({
    id: "",
    title: "",
    company: "",
    salary: 0,
    description: "",
  });

  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const error = useSelector(hasError);

  const handleSubmit = async () => {
    const response = await dispatch(updateJob(form));

    if (response.type === "jobs/update/fulfilled") {
      Toast.show({
        type: "success",
        text1: "Success!",
        text2: "Job updated successfully!",
        position: "bottom",
      });
      navigation.navigate("View Jobs");
    }
  };

  const onUpdateInput = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  useEffect(() => {
    const { job } = route.params;
    setForm({
      ...job,
      salary: job.salary.toString(),
    });
  }, []);

  console.log("form", form);

  return (
    <CreateUpdateJobForm
      form={form}
      onUpdateInput={onUpdateInput}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
      creating={false}
    />
  );
};

export default UpdateJobScreen;
