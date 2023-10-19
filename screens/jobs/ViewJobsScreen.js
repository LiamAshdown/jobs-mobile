import React, { useEffect } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import FABButton from "../../components/jobs/FABButton";
import Card from "../../components/jobs/JobCard";
import { getJobs } from "../../store/jobs/actions";
import { getAllJobs, isLoading } from "../../store/jobs/selectors";
import ViewJobsStyles from "../../styles/jobs/ViewJobsStyles";

const ViewJobsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const jobs = useSelector(getAllJobs);
  const loading = useSelector(isLoading);

  console.log(jobs);

  useEffect(() => {
    console.log("getting jobs");
    dispatch(getJobs());
  }, []);

  const onCreateJob = () => {
    navigation.navigate("Create Job");
  };

  const onRefresh = () => {
    dispatch(getJobs());
  };

  return (
    <View style={ViewJobsStyles.container}>
      <FlatList
        data={jobs}
        renderItem={({ item }) => <Card job={item} />}
        ItemSeparatorComponent={() => <View style={ViewJobsStyles.seperator} />}
        style={ViewJobsStyles.wrapper}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      />
      <FABButton onPress={onCreateJob} />
    </View>
  );
};

export default ViewJobsScreen;
