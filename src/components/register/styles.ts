import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#ffffff" },
  keyboardAvoiding: { flex: 1 },
  container: {
    flexGrow: 1,
    paddingHorizontal: width * 0.08,
    paddingTop: 16,
    paddingBottom: width * 0.2,
    backgroundColor: "#ffffff",
  },

  // Header
  header: { alignItems: "center", marginVertical: width * 0.1},
  brand: { fontSize: 14, color: "#6b7280", letterSpacing: 1, textTransform: "uppercase" as const },
  title: { fontSize: 28, fontWeight: "800", color: "#111827", marginTop: 4 },
  subtitle: { fontSize: 14, color: "#6b7280", marginTop: 6, textAlign: "center" },

  // Card/container
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 18,
    marginTop: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  form: { width: "100%" },
  inputGroup: { marginBottom: 16 },

  label: { fontSize: 13, fontWeight: "600", color: "#374151", marginBottom: 8 },
  labelRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },

  hint: { fontSize: 12, color: "#9ca3af" },

  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
  },
  leftIcon: { marginLeft: 12 },

  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontSize: 16,
    color: "#111827",
  },
  eyeIcon: { position: "absolute", right: 12 },

  inputError: { borderColor: "#dc2626" },
  fieldError: { color: "#dc2626", fontSize: 12, marginTop: 6 },

  // Botões
  primaryButton: {
    backgroundColor: "#111827",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
  },
  primaryButtonDisabled: { backgroundColor: "#d1d5db" },
  primaryButtonText: { color: "#fff", fontSize: 16, fontWeight: "700" },

  loginError: { color: "#dc2626", fontSize: 14, marginTop: 10, textAlign: "center" },

  backToLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginTop: 18,
  },
  backToLoginText: { color: "#111827", fontSize: 14, fontWeight: "600" },

  footerNote: { textAlign: "center", marginTop: 18, color: "#9ca3af", fontSize: 12 },
});
