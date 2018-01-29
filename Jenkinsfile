pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh './jenkins/scripts/build.sh'
        sh './jenkins/scripts/start.sh'
      }
    }
  }
}