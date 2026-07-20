import { StyleSheet, Platform } from "react-native";

const COLORS = {
  bgDark: "#0B0F19",
  bgCard: "#1E293B",
  accent: "#38BDF8",
  textPrimary: "#F8FAFC",
  textMuted: "#94A3B8",
};

export const IndexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgDark,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  text: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.accent,
    letterSpacing: 0.5,
    textAlign: "center",
  }
});

export const AboutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgDark,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
  },
  card: {
    backgroundColor: COLORS.bgCard,
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  heading: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.textPrimary,
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.accent,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    color: COLORS.textMuted,
  }
});



export const NotFoundStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgDark,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  text: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.accent,
    letterSpacing: 0.5,
    textAlign: "center",
  }
});