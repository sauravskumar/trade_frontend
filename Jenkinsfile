pipeline {
  agent {
    docker {
      image 'python'
      args '-p 3000:3000 --name trade_frontend'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh './jenkins/scripts/start.sh'
        sh './jenkins/scripts/build.sh'
      }
    }
  }
}