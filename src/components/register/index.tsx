import { supabase } from "@/lib/supabase";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";


export function Register() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erroGlobal, setErroGlobal] = useState("");

  const canSubmit =
    nome.trim() &&
    email.trim() &&
    senha.length >= 6 &&
    confirmarSenha === senha &&
    !loading;

  const handleSignUp = async () => {
    try {
      setLoading(true);
      setErroGlobal("");
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: senha,
        options: {
          data: { nome: nome.trim() }
        },
      });
      if (error) {
        setErroGlobal(error.message || "Falha ao cadastrar. Verifique a validação dos campos!");
        return;
      }
      router.replace("/(auth)"); // Redireciona para a tela de login após o cadastro
      return data;
    } catch (e: any) {
      setErroGlobal(e.message || "Falha ao cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoiding}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          {/* Cabeçalho */}
          <View style={styles.header}>
            <Text style={styles.brand}>Connect Skills</Text>
            <Text style={styles.title}>Criar conta</Text>
            <Text style={styles.subtitle}>
              Junte-se à rede para aprender e ensinar habilidades.
            </Text>
          </View>

          {/* Card */}
          <View style={styles.card}>
            {/* Nome */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome</Text>
              <View style={styles.inputWithIcon}>
                <Ionicons name="person-outline" size={18} color="#6b7280" style={styles.leftIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Seu nome completo"
                  placeholderTextColor="#9ca3af"
                  autoCapitalize="words"
                  value={nome}
                  onChangeText={setNome}
                />
              </View>
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>E-mail</Text>
              <View style={styles.inputWithIcon}>
                <Ionicons name="mail-outline" size={18} color="#6b7280" style={styles.leftIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="exemplo@gmail.com"
                  placeholderTextColor="#9ca3af"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            {/* Senha */}
            <View style={styles.inputGroup}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Senha</Text>
                <Text style={styles.hint}>mín. 6 caracteres</Text>
              </View>

              <View style={styles.inputWithIcon}>
                <Ionicons name="lock-closed-outline" size={18} color="#6b7280" style={styles.leftIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="********"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showSenha}
                  value={senha}
                  onChangeText={setSenha}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => setShowSenha(!showSenha)}
                  style={styles.eyeIcon}
                  accessibilityLabel={showSenha ? "Ocultar senha" : "Mostrar senha"}
                >
                  <Ionicons
                    name={showSenha ? "eye-outline" : "eye-off-outline"}
                    size={22}
                    color="#6b7280"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirmar senha */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirmar senha</Text>
              <View style={styles.inputWithIcon}>
                <Ionicons name="shield-checkmark-outline" size={18} color="#6b7280" style={styles.leftIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="********"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showConfirmar}
                  value={confirmarSenha}
                  onChangeText={setConfirmarSenha}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmar(!showConfirmar)}
                  style={styles.eyeIcon}
                  accessibilityLabel={showConfirmar ? "Ocultar senha" : "Mostrar senha"}
                >
                  <Ionicons
                    name={showConfirmar ? "eye-outline" : "eye-off-outline"}
                    size={22}
                    color="#6b7280"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Botão Cadastrar */}
            <TouchableOpacity
              onPress={handleSignUp}
              disabled={!canSubmit}
              style={[styles.primaryButton, !canSubmit && styles.primaryButtonDisabled]}
              accessibilityLabel="Criar conta"
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.primaryButtonText}>Criar conta</Text>
              )}
            </TouchableOpacity>

            {/* Erro global */}
            {!!erroGlobal && <Text style={styles.loginError}>{erroGlobal}</Text>}

            {/* Voltar para Login */}
            <TouchableOpacity style={styles.backToLogin} onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={16} color="#111827" />
              <Text style={styles.backToLoginText}>Voltar para login</Text>
            </TouchableOpacity>
          </View>

          {/* Rodapézinho */}
          <Text style={styles.footerNote}>© {new Date().getFullYear()} Connect Skills</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
