#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    fstream fileP, fileW, fileO;
    fileP.open("newListP.txt", ios::in);
    fileW.open("newListW.txt", ios::in);
    fileO.open("questz.pcw", ios::out);

    string textP = "window.arrPytan = [";
    string textW = "window.arrWyzwan = [";
    string buff;

    //pytania
    fileO << textP << endl;
    while(!fileP.eof()){
        getline(fileP, buff);
        fileO << "'" << buff;
        if(!fileP.eof()) fileO << "'," << endl;
        else fileO << "'" << endl;
    }
    fileO << "];" << endl << endl;


    //wyzwania
    fileO << textW << endl;
    while(!fileW.eof()){
        getline(fileW, buff);
        fileO << "'" << buff;
        if(!fileW.eof()) fileO << "'," << endl;
        else fileO << "'" << endl;
    }
    fileO << "];" << endl << endl;


    fileP.close();
    fileW.close();
    fileO.close();
    return 0;
}
