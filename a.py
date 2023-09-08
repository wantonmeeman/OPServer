name = input("name")
dis = float(input("distance"))/10 #Assuming we enter in millions
dia = float(input("diameter"))/2000
day = float(input("days"))/12

str = """
#"""+name+""" {
    height: """+str(dia)+"""px;
    width: """+str(dia)+"""px;
    left:"""+str((139.27 + dis * 2)/2 - dia/2)+"""px;
    top:"""+str(139.27 + dis * 2 - dia/2)+"""px;
}

#"""+name+"""TP {
    height: """+str(139.27 + dis * 2)+"""px;
    width: """+str(139.27 + dis * 2)+"""px;
    left: """+str(320-69.635-dis)+"""px;
    top: """+str(320-69.635-dis)+"""px;
}

#"""+name+"""Fulcrum {
    position: absolute;
    border: .1px solid transparent;
    height: """+str(139.27 + dis * 2)+"""px;
    width: """+str(139.27 + dis * 2)+"""px;

    animation: orbit """+str(day)+"""s linear infinite;
    -webkit-animation: orbit """+str(day)+"""s linear infinite;

    left: """+str(320-69.635-dis)+"""px;
    top: """+str(320-69.635-dis)+"""px;
}

""" + ''' 
<div id="'''+name+'''TP" class="planetTrail">

            </div>
            <div id="'''+name+'''Fulcrum" class="fulcrum">
                <div id="'''+name+'''" class="planet">

                </div>
            </div>
'''



print(str)