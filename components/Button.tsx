import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';



export default function CustomButton({ title,  variant = 'primary' }:{title:string,variant?:string}) {
  // Combine base styles with chosen variant styles
  const buttonStyles = [
    styles.buttonBase,
    variant === 'secondary' ? styles.buttonSecondary : styles.buttonPrimary
  ];

  const textStyles = [
    styles.textBase,
    variant === 'secondary' ? styles.textSecondary : styles.textPrimary
  ];

  return (
    <TouchableOpacity 
      style={buttonStyles} 
      
      activeOpacity={0.7}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  // Variant Container Styles
  buttonPrimary: {
    backgroundColor: '#007AFF', // iOS Blue
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007AFF',
  },

  buttonDanger:{
    backgroundColor: '#FF3B30', 
  },
  buttonSuccess:{
    backgroundColor: '#34C759', 
  },
  buttonWarning:{
    backgroundColor: '#FF9500', 
  },
  buttonInfo:{
    backgroundColor: '#5AC8FA', 
  },
  buttonLight:{
    backgroundColor: '#F2F2F7', 
  },
  buttonDark:{
    backgroundColor: '#1C1C1E', 
  },
  // Shared Text Styles
  textBase: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  // Variant Text Styles
  textPrimary: {
    color: '#FFFFFF',
  },
  textSecondary: {
    color: '#007AFF',
  },
});
