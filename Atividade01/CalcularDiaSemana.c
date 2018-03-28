#include<stdio.h>
#include <stdlib.h>
int main(){

     int data;
     int dia = 0;
     int mes = 0;
     int ano = 0;
     int bissexto;
     int dataReferencia, diaR, mesR,anoR;
     int diaSemana;


    printf("Digite a data: ");
    scanf("%d",&data);

    dia = data % 100;

    ano = data / 10000;

    mes =  (data /100) - (ano * 100);

    printf("ano = %d \n",ano);

    printf("mes  = %d \n",mes);

    printf("dia = %d \n",dia);

    if(ano < 1000 || mes>12 || dia>31){
        printf("-1");
        exit(-1);
    }
    if((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30 || dia < 1){
        printf("-1");
        exit(-1);
    }
    if((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && dia > 31 || dia < 1){
        printf("-1");
        exit(-1);
    }

    if(mes == 2 && dia > 28 || dia < 1){
        printf("-1");
        exit(-1);
    }
    //Todas as condicoes da primeira data foram Feitas.

    printf("Digite o ano bissexto: ");
    scanf("%d",&bissexto);

    if(bissexto < 0){
        printf("-1");
        exit(-1);
    }

    printf("Digite a data de Referencia: ");
    scanf("%d",&dataReferencia);


    diaR = dataReferencia % 100;

    anoR = dataReferencia / 10000;

    mesR =  (dataReferencia /100) - (anoR * 100);

    if(anoR < 1000 || mesR>12 || diaR>31){
        printf("-1");
        exit(-1);
    }
    if((mesR == 4 || mesR == 6 || mesR == 9 || mesR == 11) && diaR > 30 || diaR < 1){
        printf("-1");
        exit(-1);
    }
    if((mesR == 1 || mesR == 3 || mesR == 5 || mesR == 7 || mesR == 8 || mesR == 10 || mesR == 12) && diaR > 31 || diaR < 1){
        printf("-1");
        exit(-1);
    }

    if(mesR == 2 && diaR > 28 || diaR < 1){
        printf("-1");
        exit(-1);
    }
    printf("Informe o dia da Semana da Data de Referencia: ");
    scanf("%d",&diaSemana);

    if(diaSemana<0 || diaSemana > 6){
        printf("-1");
        exit(0);
    }

    return 0;
}
