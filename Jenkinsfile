pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        echo 'Test Stage'
      }
    }
    stage('Deploy') {
      steps {
        sh 'ls'
      }
    }
  }
}