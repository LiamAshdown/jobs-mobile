import React, { useEffect, useRef, useState } from "react";
import { Animated, FlatList, RefreshControl, View } from "react-native";
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

  const animationValue = useRef(new Animated.Value(0)).current;

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

  const onRefresh = async () => {
    await dispatch(getJobs());
    animateCard();
  };

  const animateCard = () => {
    animationValue.setValue(0);
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animateCard();
  }, []);

  const cardAnimation = {
    transform: [
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],
        }),
      },
    ],
  };

  return (
    <>
      <View style={ViewJobsStyles.container}>
        {jobs.length > 0 && (
          <FlatList
            data={jobs}
            renderItem={({ item }) => (
              <Animated.View style={cardAnimation}>
                <Card job={item} onEdit={onEdit} onDelete={onDelete} />
              </Animated.View>
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
