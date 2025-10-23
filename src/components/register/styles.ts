import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#ffffff" },
  keyboardAvoiding: { flex: 1 },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
    backgroundColor: "#ffffff",
  },

  // Header
  header: { alignItems: "center", marginBottom: 16 },
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

  // Força da senha
  strengthRow: { flexDirection: "row", alignItems: "center", marginTop: 8, gap: 6 },
  strengthBar: { flex: 1, height: 6, backgroundColor: "#e5e7eb", borderRadius: 999 },
  strengthBarOn: { backgroundColor: "#10b981" },
  strengthLabel: { marginLeft: 8, fontSize: 12, color: "#6b7280" },

  // Termos
  termsRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  checkboxOn: { backgroundColor: "#111827", borderColor: "#111827" },
  termsText: { flex: 1, color: "#4b5563", fontSize: 13 },
  link: { color: "#3b82f6", fontWeight: "700" },

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
