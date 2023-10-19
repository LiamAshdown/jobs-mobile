import React from "react";
import { View } from "react-native";
import { IconButton, MD3Colors, Surface, Text } from "react-native-paper";

import JobCardStyles from "../../styles/jobs/JobCardStyles";
import Divider from "../Divider";

const JobCard = ({ job, onEdit, onDelete }) => {
  return (
    <Surface style={JobCardStyles.container}>
      <View>
        <View style={JobCardStyles.headerContainer}>
          <View style={JobCardStyles.titleContainer}>
            <Text style={JobCardStyles.titleText}>{job.title} </Text>
            <Text variant="bodySmall" style={JobCardStyles.companyText}>
              by {job.company}
            </Text>
          </View>
          <View style={JobCardStyles.actionsContainer}>
            <View>
              <IconButton
                icon="trash-can-outline"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => onDelete(job.id)}
              />
            </View>
            <View>
              <IconButton
                icon="pencil"
                iconColor={MD3Colors.primary50}
                size={20}
                onPress={() => onEdit(job)}
              />
            </View>
          </View>
        </View>
        <Divider />
        <Text>{job.description}</Text>
        <Divider />
        <View style={JobCardStyles.footerContainer}>
          <Text style={JobCardStyles.dateText}>
            {job.human_readable_created_at}
          </Text>
          <Text style={JobCardStyles.salaryText}>£{job.salary}</Text>
        </View>
      </View>
    </Surface>
  );
};

export default JobCard;
