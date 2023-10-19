import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { Text } from "react-native-paper";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";

import FABButton from "../../components/jobs/FABButton";
import Card from "../../components/jobs/JobCard";
import ConfirmModal from "../../components/modals/ConfirmModal";
import { deleteJob, getJobs } from "../../store/jobs/actions";
import { clearError } from "../../store/jobs/reducer";
import { getAllJobs, isLoading } from "../../store/jobs/selectors";
import ViewJobsStyles from "../../styles/jobs/ViewJobsStyles";

const ViewJobsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const jobs = useSelector(getAllJobs);
  const loading = useSelector(isLoading);
  const [showModal, setShowModal] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  const onCreateJob = () => {
    dispatch(clearError());
    navigation.navigate("Create Job");
  };

  const onEdit = (job) => {
    dispatch(clearError());
    navigation.navigate("Update Job", { job });
  };

  const onDelete = (id) => {
    setShowModal(true);
    setJobToDelete(id);
  };

  const onConfirmDelete = () => {
    Toast.show({
      type: "success",
      text1: "Success!",
      text2: "Job deleted successfully!",
      position: "bottom",
    });
    dispatch(deleteJob(jobToDelete));
    setShowModal(false);
  };

  const onHidemModal = () => {
    setShowModal(false);
    setJobToDelete(null);
  };

  const onRefresh = () => {
    dispatch(getJobs());
  };

  return (
    <>
      <View style={ViewJobsStyles.container}>
        {jobs.length > 0 && (
          <FlatList
            data={jobs}
            renderItem={({ item }) => (
              <Card job={item} onEdit={onEdit} onDelete={onDelete} />
            )}
            ItemSeparatorComponent={() => (
              <View style={ViewJobsStyles.seperator} />
            )}
            style={ViewJobsStyles.wrapper}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={onRefresh} />
            }
          />
        )}
        {jobs.length === 0 && !loading && (
          <View style={ViewJobsStyles.empty}>
            <Text variant="titleLarge" style={ViewJobsStyles.emptyText}>
              No jobs found!
              <Text variant="titleSmall" style={ViewJobsStyles.emptyText}>
                {"\n"}
                Create a job to get started.
              </Text>
            </Text>
          </View>
        )}
        <FABButton onPress={onCreateJob} />
      </View>
      <ConfirmModal
        visible={showModal}
        hideModal={onHidemModal}
        onConfirm={onConfirmDelete}
      />
    </>
  );
};

export default ViewJobsScreen;
