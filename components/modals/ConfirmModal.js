import React from "react";
import { View } from "react-native";
import { Button, Modal, Portal, Text } from "react-native-paper";

import ConfirmModalStyles from "../../styles/modals/ConfirmModalStyles";

const ConfirmModal = ({ visible, hideModal, onConfirm }) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={ConfirmModalStyles.container}
      >
        <View style={ConfirmModalStyles.textContainer}>
          <Text style={ConfirmModalStyles.text}>
            Are you sure you want to delete this job?
          </Text>
          <Text style={ConfirmModalStyles.text}>
            This action cannot be undone.
          </Text>
        </View>
        <View style={ConfirmModalStyles.actions}>
          <Button onPress={hideModal}>Cancel</Button>
          <Button onPress={onConfirm} textColor="red">
            Delete
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

export default ConfirmModal;
