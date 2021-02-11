<template lang="html">
    <div class="container">
        <div class="row text-center login-page">
	        <div class="col-md-12 login-form">
	            <form action="claseDestino.php" method="post"> 

                    <div class="row">
                        <div class="col-md-12 login-from-row">
                            <input name="usuario" type="text" placeholder="Usuario" required/>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-12 login-from-row">
                            <input name="password" type="password" placeholder="Contraseña" required/>
                        </div>
                    </div>
                    <br>
                    <div class="row">
		                <div class="col-md-12 login-from-row">
		                    <button class="btn btn-info">Entrar</button>
                            <b-button type="submit" placeholder="Contraseña" class="btn-large-space"  :to="{ name:'ListBook'}">Ingresar</b-button> 
                        </div>
		            </div>
		        </form>
            </div>  
        </div>
    </div>
</template>
