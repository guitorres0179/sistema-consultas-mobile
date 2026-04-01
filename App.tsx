
          <Button title="Confirmar Consulta" onPress={confirmarConsulta} />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "80%",
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
});