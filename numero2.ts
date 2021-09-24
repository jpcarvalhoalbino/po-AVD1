class ConversaoDeUnidadesDeTempo {

    static converterMinutoEmSegundos(minutos: number) {
      const umMinutoEmSegundos = 60;
      return minutos * umMinutoEmSegundos;
    }
  
    static converterHorasEmMinutos(horas: number) {
      const umaHoraEmMinutos = 60;
      return umaHoraEmMinutos * horas;
    }
  
    static converterDiaEmHoras(dias: number) {
      const umDiaEmHoras = 24;
      return dias * umDiaEmHoras;
    }
  
    static converterSemanaEmDias(semanas: number) {
      const umaSemanaEmDias = 7;
      return umaSemanaEmDias * semanas;
    }
  
    static converterMesEmDias(meses: number) {
      const umMesEmDias = 30;
  
      return meses * umMesEmDias;
    }
  
    static anosconvercao(anos: number) {
      const umAnoEmDias = 365.25;
      return anos * umAnoEmDias;
    }
  }
  
  const minutos = 200;
  const segundos = 100;
  const horas = 200;
  const dias = 80;
  const semanas = 22;
  const meses = 11;
  const anos = 8;
  
  console.log(`${minutos} minutos são ${ConversaoDeUnidadesDeTempo.converterMinutoEmSegundos(minutos)} segundos`)
  console.log(`${horas} horas são ${ConversaoDeUnidadesDeTempo.converterHorasEmMinutos(horas)} minutos`)
  console.log(`${dias} dias são ${ConversaoDeUnidadesDeTempo.converterDiaEmHoras(dias)} horas`)
  console.log(`${semanas} semanas são ${ConversaoDeUnidadesDeTempo.converterSemanaEmDias(semanas)} dias`)
  console.log(`${meses} meses são ${ConversaoDeUnidadesDeTempo.converterMesEmDias(meses)} dias`)
  console.log(`${anos} ano são ${ConversaoDeUnidadesDeTempo.anosconvercao(anos)} dias`)